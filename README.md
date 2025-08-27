# GameHub - Trang chủ game (khung mẫu)

## Cấu trúc

```
/workspace
├─ index.html      # Khung HTML trang chủ
├─ styles.css      # Giao diện responsive, dark theme
├─ script.js       # Tìm kiếm, toggle menu, render game cards
└─ assets/
   ├─ images/      # Ảnh bìa game, hero
   └─ icons/       # Favicon, biểu tượng
```

## Cách chạy
- Cách 1: Mở trực tiếp file `index.html` bằng trình duyệt.
- Cách 2: Dùng Live Server hoặc http-server để xem: `npx http-server -p 3000` rồi mở `http://localhost:3000`.

## Tuỳ biến nhanh
- Thêm/sửa danh sách game trong `script.js` (mảng `sampleGames`).
- Thêm ảnh vào `assets/images` và cập nhật đường dẫn tương ứng.
- Sửa màu sắc, font, layout trong `styles.css`.

## Ghi chú
- Ảnh demo chưa được cung cấp. Hãy thêm ảnh vào `assets/images` theo tên trong `sampleGames` hoặc đổi tên trong dữ liệu.
