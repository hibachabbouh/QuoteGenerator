import { QuoteService } from './../../../services/quote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {
  quotes:any=[];//DisplayData
  Author='Joe Jackson';
  Text='If you build it, they will come.';
  constructor(private service:QuoteService) { }

  ngOnInit(): void {
    this.service.getQuotes().subscribe(
      value => {
        this.quotes = value; 
        console.log(this.quotes); 
      },
      error => {
        console.error('Une erreur s\'est produite :', error);
      }
    );
    const randomQuote = this.random();
    console.log('Citation aléatoire :', randomQuote);  
  }

  random() {
    const Rand = Math.floor(Math.random() * this.quotes.length);
     this.Author=this.quotes[Rand].author.split(",")[0].trim();
     this.Text=this.quotes[Rand].text;
  }

  goTwitter() { 
    window.open(`https://twitter.com/intent/tweet?text=${this.Text} ${this.Author}`);
  }
  
  


}
