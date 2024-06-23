import {ConfigProvider} from "antd";

export const ConfigThemeProvider  = ({children}) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontSize: 18,
                    colorPrimary: '#fff',
                    colorText: '#fff'
                },
                components: {
                    Pagination: {
                        itemSize: 48,
                        itemActiveBg: 'transparent',
                    }
                }
            }}
        >
            {children}
        </ConfigProvider>
    )
}