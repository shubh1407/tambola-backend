package com.InnovTeam.tambola.model;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Builder
@Data
@Getter
@Setter
public class BoxNumb 
{
	private int num;
	private int pos;
	private boolean isShowGreen;
	private boolean isShowCross;
	
}
