# 2k6quangAnh
Đây là app mà anh Kiên đã làm, nhưng có thắc mắc, em có thể liên hệ với anh để giải đáp và hỗ trợ.

## Set-up phần mềm

Nhớ thay tên ứng dụng tại dòng 298, trong screens/LogReg.js

### 1. Cài đặt môi trường

- Yêu cầu hệ thống: Cài đặt NodeJS, npm, git mới nhất
- Cách kiểm tra phiên bản hiện tại nếu đã cài đặt:
  - NodeJS: `node -v`
  - npm: `npm -v`
- Cài đặt Yarn:
  - Chạy dòng lệnh tại terminal hệ thống: `npm install --global yarn`

### 2. Tải về máy:

    - Tại trang của Repo này, chọn nút xanh lá " <> Code " và chọn "Download ZIP"
    - Giải nén file vừa tải về
    - Kiểm tra xem có thư mục ẩn là .git trong mục vừa giải nén không, nếu có thì xoá đi
    - Xoá file README.md nếu có
    - Mở Terminal (MacOS) hoặc Command Prompt (Windows) và trỏ đến thư mục vừa giải nén
    - Chạy lệnh `yarn install` để cài đặt các thư viện cần thiết

### 3. Chạy chương trình

    - Mở IDE phù hợp (gợi ý là Microsoft Visual Studio Code)
    - Mở folder code đã giải nén
    - Tạo terminal mới và chạy lệnh `yarn start`

### 4. Cách sử dụng

    - Trên điện thoại, tải ứng dụng Expo Go
    - Đảm bảo điện thoại và máy tính có kết nối chung một hệ thống Wifi và có Internet
    - Quét mã QR trên terminal của Microsoft Visual Studio Code, với Android Mở ứng dụng Expo Go và quét mã
    - Chờ đợi ứng dụng được tải về và chạy

### 5. Các thông báo lỗi phát sinh

    - Các Warn, cảnh báo màu vàng xuất hiện để thông báo những vấn đề thông thường của hệ thống, về tính tương thích hoặc khả năng hỗ trợ, không cần lo ngại và có thể tắt chúng đi
    - Các Error, cảnh báo màu đỏ nói về lỗi trong việc xử lý thông tin. Ghi lại và báo cáo cho nhóm phát triển để khắc phục.
    - Trường hợp cần khởi động lại ứng dụng, có thể nhấn phím R trên cửa sổ terminal hoặc lắc điện thoại và chọn Reload App

### 6. Cách update lên Repo Github của bản thân

    - Nếu chưa có repo thì tạo mới, điền tên của repo.
    - Trong màn hình IDE, tạo cửa sổ terminal mới của Project, dán và chạy code của mục "…or create a new repository on the command line" trên màn hình Repo
    - Chạy các dòng sau đây:
    - git add .
    - git commit -m "NỘI_DUNG_THÔNG_ĐIỆP"
    - git push
