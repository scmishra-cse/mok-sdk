import React from 'react';

import { MessageCardProps } from '../types';
import { formatDate } from '../utils';

export const MessageCard = ({
	text,
	time,
	textColor,
	textStyles,
	ruleStyles,
}: MessageCardProps) => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					margin: '0 15px',
					color: textColor,
				}}>
				<p style={{ ...textStyles }}>{text}</p>
				<p style={{ fontSize: '14px', ...textStyles }}>{formatDate(time)}</p>
			</div>
			<hr style={{ opacity: '0.5', ...ruleStyles, color: textColor }} />
		</>
	);
};
