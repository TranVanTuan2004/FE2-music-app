const Footer = () => {
    return (
        <footer className="text-white px-6 py-10 text-sm border-t-[1px] border-gray-700">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
                {/* Cột: Công ty */}
                <div>
                    <h4 className="font-bold mb-3">Công ty</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#">Giới thiệu</a></li>
                        <li><a href="#">Việc làm</a></li>
                        <li><a href="#">For the Record</a></li>
                    </ul>
                </div>

                {/* Cột: Cộng đồng */}
                <div>
                    <h4 className="font-bold mb-3">Cộng đồng</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#">Dành cho các Nghệ sĩ</a></li>
                        <li><a href="#">Nhà phát triển</a></li>
                        <li><a href="#">Quảng cáo</a></li>
                        <li><a href="#">Nhà đầu tư</a></li>
                        <li><a href="#">Nhà cung cấp</a></li>
                    </ul>
                </div>

                {/* Cột: Liên kết hữu ích */}
                <div>
                    <h4 className="font-bold mb-3">Liên kết hữu ích</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#">Hỗ trợ</a></li>
                        <li><a href="#">Ứng dụng Di động Miễn phí</a></li>
                        <li><a href="#">Phổ biến theo quốc gia</a></li>
                    </ul>
                </div>

                {/* Cột: Các gói của Spotify */}
                <div>
                    <h4 className="font-bold mb-3">Các gói của Spotify</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#">Premium Individual</a></li>
                        <li><a href="#">Premium Student</a></li>
                        <li><a href="#">Spotify Free</a></li>
                    </ul>
                </div>
            </div>

            {/* Social & Bottom links */}
            <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row md:justify-between items-center text-gray-400 text-xs space-y-4 md:space-y-0">
                {/* Liên kết pháp lý */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href="#">Pháp lý</a>
                    <a href="#">Trung tâm an toàn và quyền riêng tư</a>
                    <a href="#">Chính sách quyền riêng tư</a>
                    <a href="#">Cookie</a>
                    <a href="#">Giới thiệu Quảng cáo</a>
                    <a href="#">Hỗ trợ tiếp cận</a>
                </div>

                {/* Bản quyền */}
                <div className="mt-2 md:mt-0">
                    © 2025 Spotify AB
                </div>
            </div>
        </footer>
    );
}


export default Footer;