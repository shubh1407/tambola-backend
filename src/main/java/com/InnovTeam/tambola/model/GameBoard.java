package com.InnovTeam.tambola.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Builder
public class GameBoard 
{
	private String gameId;
	private boolean gameStart;
	private boolean gameEnd;
	private ArrayList<Player> playerList;
	private List<Integer> numberDrawns;
}
