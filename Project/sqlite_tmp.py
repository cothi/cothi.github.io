import sqlite3


# sqlite3 연결
conn = sqlite3.connect("database.db")
print("Opened database successfully!")

# sqlite3 데이터 베이스 테이블 생성

conn.execute("CREATE TABLE COMMENTTABLE (COMMENT TEXT)")
print("Table created successfully!")
conn.close()
