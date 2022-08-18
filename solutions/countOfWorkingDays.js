'use strict';

/*2. Írj egy függvényt `countOfWorkingDays` néven, ami két paramétert kap. 
Mind a két paraméter egy-egy dátum. Az első a  korábbi időpont, a második  a későbbi időpont.
  A visszatérési értéke a két dátum közötti munkanapok (hétfő-péntek) száma! 
  A különböző ünnepekkel nem kell számolnod! Ha az első dátum korábbi, 
  mint a második akkor dobj egy hibát az alábbi üzenettel:
   `The first parameter is earlier date, than second!`!
Hibát dobni a következő módon tudsz: 

```javascript
  throw new Error(`The first parameter is earlier date, than second!`)
```
A aktuális napot is bele kell számolni a munkanapokba, ha az munkanap!
Sehol ne használj kerekítést!*/

/*date2-date1 nagyobbegyenlő mint 7 nap
    date2sorszáma: a hét hányadik napja
    date1sorszáma a hét hányadik napja
    munkanapTeljeshét:egészrésze(date2-date1/7)*5 
    ha 7-date2sorszáma>=2 akkor 5 ha 7-date2sorszáma<2 akkor date2sorszáma
    ha 7-date1sorszáma>=2 akkor 5-date1sorszáma ha 7-date1sorszáma<2 akkor 0
    munkanapTotal: munkanapTeljeshét 

    date2-date1 kisebb mint 7 nap de nagyobb mint 0
    ha date2sorszáma=7 és date1sorszáma>=6 akkor date2sorszáma-date1sorszáma
    ha date2sorszáma>=6 és date1sorszáma<=5 akkor 5-date1sorszáma
    ha date2sorszáma<=5 és data1sorszáma<=5 akkor date2sorszáma-date1sorszáma
    
    ha date2-date1 = 0 akkor 0
    ha date2-date1 < 0 akkor error
    */

const countOfWorkingDays = (date1, date2) => {






};

export default countOfWorkingDays;

