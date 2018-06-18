import { TestBed, inject } from '@angular/core/testing';
import { PokelistService } from './pokelist.service';
import { HttpClientModule } from '@angular/common/http';

describe('PokelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokelistService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([PokelistService], (service: PokelistService) => {
    expect(service).toBeTruthy();
  }));
});
