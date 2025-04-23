import { Box, Typography } from "@mui/material"

const CustomErrorOverlay = () => (
    <Box sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        p: 2,
    }}
    >
        <Typography variant="h6" color="error">
            😢 Không thể tải dữ liệu!
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Vui lòng kiểm tra lại kết nối hoặc thử lại sau.
        </Typography>
    </Box>
)

export default CustomErrorOverlay