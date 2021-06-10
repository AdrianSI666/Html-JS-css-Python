# -*- coding: utf-8 -*-
"""
Created on Thu May 27 08:18:57 2021

@author: Adrian
"""

import sqlite3

if __name__ == "__main__":
        
    conn = sqlite3.connect('database.db')
    print("BD otwarta")

    conn.execute('CREATE TABLE praacownicy (imienazwisko TEXT, nrpracownika TEXT, adres TEXT)')
    print("Tabela utworzona")
    
    cur = conn.cursor()
    
    cur.execute("INSERT INTO praacownicy (imienazwisko, nrpracownika, adres) VALUES (?,?,?)",('Adrian Sledz','0','Polowska 123') )
    cur.execute("INSERT INTO praacownicy (imienazwisko, nrpracownika, adres) VALUES (?,?,?)",('Jagoda Stol','1','Sadowska 12') )
    conn.commit()
    
    cur.execute('SELECT * FROM praacownicy')
    print(cur.fetchall())
    
    conn.close()
    print("BD zamknieta")