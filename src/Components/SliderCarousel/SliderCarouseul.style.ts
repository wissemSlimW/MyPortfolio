import { createUseStyles } from "react-jss"

export const useSliderCarouselStyles = createUseStyles({

    box: {
        position: "relative",
        aspectRatio: 16 / 9,
        color: ({ theme }: { theme: AppTheme }) => theme.colorPrimaryLight,
        width: 350,
        transformStyle: 'preserve-3d',
        transform: 'perspective(100vw) rotateY(0deg)',
        "&>span": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transformOrigin: "center",
            transformStyle: "preserve-3d",
            "-webkit-box-reflect": "below 0px linear-gradient(transparent, transparent, #0002)",
            '&:before': {
                content: "''",
                position: 'absolute',
                background: ({ theme }: { theme: AppTheme }) => theme.colorLight,
                borderRadius: 10,
                insetBlockStart: 0,
                width: "100%",
                height: "100%",
            },
            "&>div": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundSize: 'contain',

            },
            "&>div>img": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                overflow: 'hidden',
                borderRadius: 15,
            }
        },
    },
    carouselContainer: {
        paddingBlock: 40,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    "@media only screen and (min-width: 900px) ": {
        box: {
            width: 500,
        }
    },
    loadingImgAnimation: {
        "&:before": {
            content: '""',
            position: 'absolute',
            inset: 0,
            animation: "$pulsing 2s infinite linear",
            backgroundColor: "#00000000"
        }
    },
    "@keyframes pulsing": {
        '50%': {
            backgroundColor: '#00000050'
        }
    }
})