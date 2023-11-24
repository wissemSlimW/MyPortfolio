import { createUseStyles } from "react-jss";

export const useContactStyle = createUseStyles({
    contactCard: {
        padding: 30,
        paddingBlockEnd: 100,
        borderRadius: 20,
        backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorWhite
    },
    contactFieldCard: {
        borderRadius: 20,
        padding: 20,
        boxShadow: ({ theme }: { theme: AppTheme }) => `0px 0px 9px ${theme.colorPrimary}`
    },
    contactFieldCardDark: {
        backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorLight,
    },
    contactFieldCardLight: {
        backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
    },
    submitBtncontainer: {
        display: 'flex',
        justifyContent: 'end'
    },
    submitBtn: {
        "&&&": {
            cursor: "pointer",
            borderRadius: 20,
            paddingBlock: 10,
            paddingInline: 30,
            height: 44,
            fontSize: 16,
            fontWeight: 700,
            textTransform: 'none',
        }
    },
    submitBtnDark: {
        "&&&": {
            backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
            color: ({ theme }: { theme: AppTheme }) => theme.colorWhite,
            boxShadow: ({ theme }: { theme: AppTheme }) => `0px 2px 10px 2px ${theme.colorPrimary}`,
        }
    },
    submitBtnLight: {
        "&&&": {
            backgroundColor: ({ theme }: { theme: AppTheme }) => theme.colorWhite,
            color: ({ theme }: { theme: AppTheme }) => theme.colorPrimary,
            boxShadow: ({ theme }: { theme: AppTheme }) => `0px 0px 8px 0px ${theme.colorBlack}`,
        }
    },
    contactColor: {
        color: ({ theme }: { theme: AppTheme }) => theme.colorDark,
    },
    contactSubTitle: {
        color: ({ theme }: { theme: AppTheme }) => theme.colorBlack,
        fontSize: 18
    },
    contactText: {
        paddingBlock: 10,
        paddingInlineEnd: 30,
        textAlign: 'justify',
        color: ({ theme }: { theme: AppTheme }) => theme.colorDark,
        fontSize: 14
    },
    contactEmailContainer: {
        display: 'flex',
        gap: 5,
        alignItems: 'center',
        paddingBlockStart: 50,
        paddingBlockEnd: 20
    },
    sendIcon: {
        '&&& path': {
            fill: ({ theme }: { theme: AppTheme }) => theme.colorBlack
        }
    }
});
