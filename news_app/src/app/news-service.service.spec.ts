import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsServiceService } from './news-service.service';

describe('NewsServiceService', () => {
  let service: NewsServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
      .compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
