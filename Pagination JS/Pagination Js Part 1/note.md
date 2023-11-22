tạo ra limit 6 -> mỗi trang có 6 sản phẩm
page1 0 -> 5
page2 6 -> 11
page3 12 -> ...

Công thức:
BeginGet = limit * (page - 1) -> lấy trang hiện tại trừ 1 * số sản phẩm được hiện trên 1 trang 
endGet = limit * page - 1 