import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-cardio',
  templateUrl: './array-cardio.component.html',
  styleUrls: ['./array-cardio.component.scss']
})
export class ArrayCardioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  ];

  people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

        // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      FilterInventors() {
        let result = this.inventors.filter((element)=>{
          return (element.year > 1499 && element.year<1600)
        });
        console.log(result);
        return result;
      }   
      
      // Array.prototype.map()
      // 2. Give us an array of the inventors' first and last names

      mapInventorsName(){
        this.inventors.map(x => console.log(x.first + ' ' + x.last));
      }

      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      birthDateSort(){
        console.log(this.inventors.map(x => x.year).sort(function (a, b) {
          return a - b;
        }));
      }
      
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?
      calculateAge(){
        let totalAge = this.inventors.reduce((total,inventor)=>{
          
          return total+(inventor.passed-inventor.year)
          
        },0)
        console.log(totalAge);
      }
      
      // calculateAge(){
      //   let totalAge = this.inventors.reduce((total,inventor)=>{
          
          
      //     return total (inventor.passed-inventor.year)
      //   })
      // }

      // var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
      // console.log("total is : " + total );
}