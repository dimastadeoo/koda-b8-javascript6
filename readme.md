# Penjelasan
## Penjelasan program Asynchronous dengan promise

Penjelasan dengan sintaks chaining then-catch dan Async-await
1. pertama buat function yang digunakan mengembalikan nilai new Promise, pada function ini saya memiliki 2 parameter y untuk banyaknya waktu tunggu(dalam detik) dan x sebagai nilai string yang ingin ditampilkan setelah waktu tunggu
2. lalu didalamnya buat function lagi yang akan digunakan sebagai parameter promise, pada function ini buat 2 parameter untuk menampilkan data ketika berhasil dan gagal
3. pada function ini kita buat proses guardding untuk menentukan nilai y agar hanya berupa number selain itu kita berikan pesan eror. lalu kita buat juga proses setTimeout untuk menentukan nilai yang akan dioutputkan ketika berhasil dan menentukan waktu tunggunya
4. nah pada sintaks chaining then-catch untuk menampilkan nya dengan cara panggil function yang pertama kita buat pada langkah 1, dan diberi parameter waktu tunggu, dan output yang diinginkan, lalu panggil method then(isi param) dan berikan output berdasarkan parameternya.
5. ulangi langkah no 4 dengan catatan untuk code selanjutnya masih ada di dalam method then
6. setelah itu pada bagian paling akhir setelah then, bisa diberi catch (isi parameter) lalu didalamnya bisa di outputkan pesan eror sesuai dengan parameter, yang kita buat pada langkah ke 3

7. selanjutnya untuk sintaks async-await, kita setelah langkah ke 3 sudah dibuat, kita buat functin baru, dengan menambahkan perintah async sebelum function
8. didalamnya kita bungkus dulu proses dengan perintah try-catch dimana ketika ada eror kita akan menampilkan pesan eror di catch
9. lalu pada bagian proses di try, kita buat dulu variabel untuk output hasilnya yang berisi perintah await lalu nama function yang kita buat di langkah 1 beserta parameter waktu tunggu, dan output yang diinginkan, lalu cetak variabel tersebut
10. ulangi langkah no 9 sesuai kebutuhan dan codenya secara berurutan / sesuai kebutuhan
11. selanjutnya pada bagian proses catch, kita beri parameter pada catch lalu kita outputkan eror berdasarkan nilai parameternya
12. terakhir kita panggil function async yang kita buat pada langkah ke 7 untuk menampilkan hasilnya