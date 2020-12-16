import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more-text-widget',
  templateUrl: './show-more-text-widget.component.html',
  styleUrls: ['./show-more-text-widget.component.scss']
})
export class ShowMoreTextWidgetComponent implements OnInit {

  @Input() item_id: number;
  @Input() text: string = "";
  @Input() min_limit: number;
  @Input() max_limit: number;
  @Input() show_all: boolean;
  @Input() show_more_url:string;
  show_more: boolean = false;
  show_less: boolean = false;
  go_to_url: boolean = false;
  show_no_words: number = 0;
  text_length: number = 0;
  showText: string = "";
  constructor() { }

  ngOnInit(): void {
    this.getNoWords();
    this.setShowText();
  }

  getNoWords() {
    if (this.text != "") {
      this.text = this.text.trim();
    }
    this.text_length = this.text.split(" ").length;
    if (this.text_length > this.min_limit) {
      this.show_no_words = this.min_limit;
      this.show_more = true;
      if (this.text_length > this.max_limit) {
        this.go_to_url = true;
      }
    } else {
      this.show_no_words = this.text_length;
    }
  }

  setShowText() {
    if (this.text_length <= this.min_limit || this.show_all == true) {
      this.showText = this.text;
    } else {
      this.showText = this.text.split(" ").splice(0, this.show_no_words).join(" ");
    }
  }

  showMore() {
    this.show_more = false;
    this.show_less = true;
    if (this.text_length > this.max_limit) {
      this.show_no_words = this.max_limit;
    } else {
      this.show_no_words = this.text_length;
    }
    this.setShowText();
  }

  showLess() {
    this.show_less = false;
    this.show_more = true;
    if (this.text_length > this.min_limit) {
      this.show_no_words = this.min_limit;
    } else {
      this.show_no_words = this.text_length;
    }
    this.setShowText();
  }

}
