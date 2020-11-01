import { Component, Input, OnInit } from '@angular/core';
import { FeedService } from '@app/services/feed.service';

@Component({
  selector: 'app-show-more-post-text-widget',
  templateUrl: './show-more-post-text-widget.component.html',
  styleUrls: ['./show-more-post-text-widget.component.scss']
})
export class ShowMorePostTextWidgetComponent implements OnInit {

  @Input() post_id: number;
  @Input() text: string = "";
  @Input() min_limit: number;
  @Input() max_limit: number;
  @Input() show_more_in_modal: boolean;
  @Input() show_all: boolean;
  show_more: boolean = false;
  show_less: boolean = false;
  open_in_modal: boolean = false;
  show_no_words: number = 0;
  text_length: number = 0;
  showText: string = "";
  constructor(public feedService: FeedService) { }

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
      if (this.text_length > this.max_limit && (this.text_length - this.max_limit) >= 10) {
        this.open_in_modal = true;
      }
    } else {
      this.show_no_words = this.text_length;
    }
  }

  setShowText() {
    if (this.text_length <= this.min_limit || this.show_all == true || (this.text_length - this.show_no_words) < 10) {
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

  showMoreInModalView() {
    this.feedService.OpenOverlayPost(this.post_id);
  }
}
