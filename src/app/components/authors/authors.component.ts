import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authors =  [];

  constructor(private authersService: AuthorsService) {
    this.authors = authersService.getAuthors();
  }

  ngOnInit(): void {
  }

}
