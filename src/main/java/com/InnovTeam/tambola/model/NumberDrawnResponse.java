package com.InnovTeam.tambola.model;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Builder
public class NumberDrawnResponse {
	
	private Player player;
	private boolean isWinner;
	private int numbDrawn;

}
