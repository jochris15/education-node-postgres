# Node Postgres
[Dokumentasi koneksi node postgres](https://node-postgres.com/features/connecting#programmatic)

## Pool vs Client
Perbedaan pool dan client apa? keduanya sama-sama untuk membuat koneksi antara node dan postgres, tetapi **Client** biasa digunakan untuk membuat 1 koneksi yang statis, sedangkan **Pool** digunakan untuk membuat koneksi dinamis yang banyak, sehingga jika kita ingin membuat aplikasi bagusnya menggunakan **Pool**

# Demo Aplikasi

## **Setup**
Database : Pemilu2024

```
npm init -y
npm i pg
touch .gitignore
```
## **Migration**
Buatlah sebuah file migrasi untuk pembuatan table menggunakan query

**Dokumentasi query pembuatan table yang ada FK :**
https://www.w3schools.com/sql/sql_foreignkey.asp

Table Parties

| Column name     | type      |
|-----------------|:---------:|
| name            | string    |
| leader          | string    |

Table Candidates

| Column name     | type      |
|-----------------|:---------:|
| name            | string    |
| money           | integer   |
| vision          | string    |
| action          | string    |
| PartyId         | serial    |

---------------------------------

## **Seeder**
**Dokumentasi query insert data sekaligus :**
https://www.w3schools.com/sql/sql_insert.asp

Buatlah sebuah seed file untuk memasukan data ke tabel `Parties` & `Candidates`. Data berasal dari folder data.