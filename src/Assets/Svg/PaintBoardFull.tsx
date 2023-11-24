import { SVGProps } from "react";

export const PaintBoardFull = (props: SVGProps<SVGSVGElement>) =>
	<svg
		{...props} fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
		width="24" height="24" viewBox="0 0 330 330" xmlSpace="preserve">
		<filter id="drop-shadow" x="0" y="0" width="150%" height="150%">
			<feFlood result="flood" floodColor="#333333" floodOpacity="1" />
			<feComposite in="flood" in2="SourceAlpha" operator="in" />
			<feGaussianBlur result="blurOut" in="offOut" stdDeviation="7" />
			<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
		</filter>
		<g filter="url(#drop-shadow)" transform="scale(0.95) translate(0, 5)">
			<path d="M277.712,57.549c-2.609-3.01-5.323-5.922-8.139-8.738C236.512,15.748,191.073-6.413,143.36,1.669
				c-37.348,6.327-60.382,34.548-58.499,71.529c0.479,9.381,2.465,18.711,6.272,27.318c4.313,9.748,13,16.633,17.102,26.218
				c8.732,20.415-9.968,33.76-28.095,33.76c-47.276-2.599-78.503,51.443-63.374,92.725c13.696,37.372,59.732,62.813,96.103,71.896
				c41.408,10.339,86.191,4.129,123.1-17.348C323.773,256.679,344.321,134.368,277.712,57.549z M141.002,290.888
				10.744,23.999,23.999
				s-10.745,23.999-23.998,23.999C200.84,106.396,190.097,95.652,190.097,82.398z M224.594,261.889
				c0-13.254,10.745-23.999,23.999-23.999s23.999,10.745,23.999,23.999C280.091,171.148,269.346,181.894,256.092,181.894z"/>
		</g></svg>