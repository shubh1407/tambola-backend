package com.InnovTeam.tambola.model;

import java.util.ArrayList;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Builder
@Data
@Getter
@Setter
public class Player {

	private String gameId;
	private String playerId;
	private ArrayList<BoxNumb> numbArray;
	private boolean allNumberCrossed;
}
