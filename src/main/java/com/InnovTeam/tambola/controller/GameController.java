package com.InnovTeam.tambola.controller;

import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.InnovTeam.tambola.constants.Constants;
import com.InnovTeam.tambola.model.GameBoard;
import com.InnovTeam.tambola.model.NumberDrawnResponse;
import com.InnovTeam.tambola.model.Player;
import com.InnovTeam.tambola.utility.CommonUtils;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GameController 
{
	
	@Autowired
	private CommonUtils commonUtils;

	
	@RequestMapping(value="showBoard",method=RequestMethod.GET)
	public Player showGameBoard(@RequestParam boolean isFirstTime)
	{
		GameBoard gameBoard=commonUtils.initialiseApplication();
		if(gameBoard.isGameStart()) {
			return null;
		}
		Player player = commonUtils.getPlayer();
		gameBoard.getPlayerList().add(player);
		return player;
	}
	
	@RequestMapping(value="checkGameStart",method=RequestMethod.GET)
	public boolean showGameBoard(@RequestParam String gameId)
	{
		boolean result=false;
		if(Constants.gameStorage.get(gameId).isGameStart() && 
				!Constants.gameStorage.get(gameId).isGameEnd()) {
			result=true;
		}
		return result;
	}
	
	@RequestMapping(value="checkGameEnd/{gameId}",method=RequestMethod.GET)
	public boolean checkEndGame(@PathVariable("gameId") String gameId)
	{
		boolean result=false;
		if(Constants.gameStorage.get(gameId).isGameEnd()) {
			result=true;
		}
		return result;
	}
	
	@RequestMapping(value="startGame",method=RequestMethod.GET)
	public String startGame(@RequestParam String gameId)
	{
		if(!Constants.gameStorage.get(gameId).isGameStart())
		{
			commonUtils.startGame(gameId);
		}
		return "Game Started";
	}
	
	@RequestMapping(value="endGame",method=RequestMethod.GET)
	public String endGame(@RequestParam String gameId)
	{
		commonUtils.endGame(gameId);
		return "Game Ended";
	}
	
	@RequestMapping(value="numberDrawn/{turnNum}",method=RequestMethod.POST)
	public NumberDrawnResponse numberDrawn(@RequestBody Player player,@PathVariable("turnNum") int turnNum)
	{
		if(Constants.gameStorage.get(player.getGameId()).isGameEnd()) {
			System.out.println("game Ended");
			return NumberDrawnResponse.builder().player(player).numbDrawn(0).
			isWinner(true).build();
		}
		int number= commonUtils.getRandomNumber(player.getGameId(),turnNum);
		GameBoard gameBoard=commonUtils.updatePlayer(player.getGameId(),number);
		Player playerResponse= gameBoard.getPlayerList().stream().
		filter(pr->pr.getPlayerId().equals(player.getPlayerId())).collect( Collectors.toList()).get(0);
		
		return NumberDrawnResponse.builder().player(playerResponse).numbDrawn(number).
				isWinner(commonUtils.isAnyoneWin(player.getGameId())).build();
		
	}
	
	@RequestMapping(value="getGameBoard",method=RequestMethod.POST)
	public GameBoard getGameBoard(@RequestParam String gameId)
	{
		return Constants.gameStorage.get(gameId);
	}
	
	@RequestMapping(value="getGameStatus/{gameId}",method=RequestMethod.GET)
	public Boolean getGameStatus(@PathVariable("gameId") String gameId)
	{
		boolean result=false;
		if(Objects.nonNull(Constants.gameStorage.get(gameId)) && Constants.gameStorage.get(gameId).isGameStart() && 
				!Constants.gameStorage.get(gameId).isGameEnd()) {
			result=true;
		}
		return result;
	}
	
	@RequestMapping(value="getPlayerDetail",method=RequestMethod.POST)
	public Player getPlayer(@RequestParam String gameId,@RequestParam String playerId)
	{
		GameBoard gameBoard=Constants.gameStorage.get(gameId);
		return gameBoard.getPlayerList().stream().
		filter(pr->pr.getPlayerId().equals(playerId)).collect( Collectors.toList()).get(0);
	}
	
	@RequestMapping(value="getTurnNum",method=RequestMethod.GET)
	public Integer getTurnNum(@RequestParam String gameId,@RequestParam int turnNum)
	{
		GameBoard gameBoard=Constants.gameStorage.get(gameId);
		return gameBoard.getNumberDrawns().get(turnNum-1);
	}
	
	
}
