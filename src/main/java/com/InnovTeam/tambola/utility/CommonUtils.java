package com.InnovTeam.tambola.utility;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Random;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.InnovTeam.tambola.constants.Constants;
import com.InnovTeam.tambola.model.BoxNumb;
import com.InnovTeam.tambola.model.GameBoard;
import com.InnovTeam.tambola.model.Player;

@Component
public class CommonUtils 
{	
	public GameBoard initialiseApplication()
	{
		GameBoard gameBoard=null;
		if(Objects.nonNull(Constants.gameStorage) && Constants.gameStorage.size()>0) {
			for(String gameId : Constants.gameStorage.keySet())
			{
				if((!Constants.gameStorage.get(gameId).isGameStart() && 
						!Constants.gameStorage.get(gameId).isGameEnd())
						|| (Constants.gameStorage.get(gameId).isGameStart() && 
								!Constants.gameStorage.get(gameId).isGameEnd())) {
					gameBoard=Constants.gameStorage.get(gameId);
					break;
				}
			}		
		}
		if(Objects.isNull(gameBoard))
		{
			GameBoard.GameBoardBuilder gameBoardBuilder=getGameBoard();
			ArrayList<Integer> result = new ArrayList<Integer>();
			for(int i=1;i<=100;i++) {
				result.add(i);
			}
			gameBoardBuilder.numberDrawns(randomize(result,100));
			Constants.gameStorage.put(gameBoardBuilder.build().getGameId(),gameBoardBuilder.build());
			gameBoard=gameBoardBuilder.build();
		}
		return gameBoard;
	}
	
	public Player getPlayer()
	{
		Player player = Player.builder().gameId(getGameId()).playerId(getPlayerId())
				.numbArray(getBoxNumbArray(getGameId())).allNumberCrossed(false).build();
		return player;
	}
	
	public int getRandomNumber(String gameId,int turnNum)
	{
		GameBoard gameBoard=Constants.gameStorage.get(gameId);
		return gameBoard.getNumberDrawns().get(turnNum-1);
	}
	
	public GameBoard updatePlayer(String gameId,int randomNumber)
	{
		for(Player player : Constants.gameStorage.get(gameId).getPlayerList()) {
			player.setNumbArray(checkNumberExist(player.getNumbArray(), randomNumber));
			player.setAllNumberCrossed(checkAllNumberChecked(player));		
		}
		return Constants.gameStorage.get(gameId);
	}
	
	public void startGame(String gameId)
	{
		Constants.gameStorage.get(gameId).setGameStart(true);
	}
	
	public void endGame(String gameId)
	{
		Constants.gameStorage.get(gameId).setGameEnd(true);
	}
	
	public boolean isAnyoneWin(String gameId) {
		boolean result=false;
		result=Constants.gameStorage.get(gameId).getPlayerList().
				stream().anyMatch(p-> p.isAllNumberCrossed());
		return result;
	}

	
	private ArrayList<BoxNumb> checkNumberExist(ArrayList<BoxNumb> boxNumb,int number)
	{
		boxNumb.stream().forEach(b -> {
			if(!(b.getNum()==number) && b.isShowGreen()) {
				b.setShowCross(true);
				b.setShowGreen(false);
			}
			if(b.getNum()==number)
			{
				b.setShowGreen(true);
			}
		});
		return boxNumb;
	}
	

	private boolean checkAllNumberChecked(Player player) 
	{
		long count=player.getNumbArray().stream().filter(boxNumb-> 
				 (boxNumb.isShowCross() || boxNumb.isShowGreen())
		).count();
		if(count==player.getNumbArray().size())
		{
			return true;
		}
		return false;
	}
	
	
	private List<Integer> randomize( ArrayList<Integer> list, int n)
    {
		List<Integer> result=null;
        Random r = new Random();
        Integer [] arr=list.toArray(new Integer [0]);
        for (int i = n-1; i > 0; i--) {
            int j = r.nextInt(i);
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        
        result = Arrays.stream(arr).collect(Collectors.toList());
        return result;
    }
	
	
	private GameBoard.GameBoardBuilder getGameBoard()
	{	
		String gameId=getGameId();
		ArrayList<Player> playerList=new ArrayList<>();
		GameBoard.GameBoardBuilder gameBoard1=GameBoard.builder().gameId(gameId).
				gameStart(false).gameEnd(false).playerList(playerList);
		return gameBoard1;
	}
	
	private String getGameId() {
		UUID idOne = UUID.randomUUID();
		if(Objects.isNull(Constants.gameId)) {
			Constants.gameId=idOne.toString();
		}
		return Constants.gameId;
	}

	private String getPlayerId() {
	{
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                                    + "0123456789"
                                    + "abcdefghijklmnopqrstuvxyz";
        StringBuilder sb = new StringBuilder(9);
        for (int i = 0; i < 9; i++) {
  
            int index=(int)(AlphaNumericString.length() * Math.random());
            sb.append(AlphaNumericString
                          .charAt(index));
        }
        return sb.toString();
	    }
	}

	
	
	private ArrayList<BoxNumb> getBoxNumbArray(String gameId)
	{
		Random r = new Random();
		int low = 1;
		ArrayList<BoxNumb> boxNumbArray = new ArrayList<BoxNumb>();
		BoxNumb.BoxNumbBuilder boxNumb = null;
		List<Integer> list = new ArrayList<>(Constants.gameStorage.get(gameId).getNumberDrawns());
		ArrayList<Integer> posList= new ArrayList<Integer>(Arrays.asList(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27));
		for(int i=0;i<28;i++)
		{
			boxNumb = BoxNumb.builder().num(0);
			boxNumbArray.add(i,boxNumb.build());
		}
		for(int i=1;i<=15;i++)
		{
			int pos=0;
			int high =list.size();
			int index=r.nextInt(high-low)+low;
			pos=r.nextInt(posList.size()-low)+low;
			boxNumb = BoxNumb.builder();
			boxNumb.num(list.get(index));
			boxNumb.isShowCross(false);
			boxNumb.isShowGreen(false);
			boxNumbArray.set(posList.get(pos),boxNumb.build());
			list.remove(index);
			posList.remove(pos);
		}
		return boxNumbArray;
	}
}
