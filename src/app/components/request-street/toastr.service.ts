import {Injectable} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastrMessageService {

  constructor(private toastr: ToastrService) {}

  success(message: string, title?: string): void {
    this.toastr.success(message, title, this.getToastOptions());
  }

  error(message: string, title?: string): void {
    this.toastr.error(message, title, this.getToastOptions());
  }

  warning(message: string, title?: string): void {
    this.toastr.warning(message, title, this.getToastOptions());
  }

  info(message: string, title?: string): void {
    this.toastr.info(message, title, this.getToastOptions());
  }

  private getToastOptions(): any {
    return {
      closeButton: true,
      timeOut: 3000,
      positionClass: 'toast-top-center'
    };
  }
}
