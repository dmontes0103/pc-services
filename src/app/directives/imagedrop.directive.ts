import { Directive, EventEmitter, HostListener, Output, HostBinding } from '@angular/core';

@Directive({
  selector: '[appImagedrop]'
})
export class ImagedropDirective {

  @Output() imageDropped = new EventEmitter();
  @Output() imageHovered = new EventEmitter();
  @HostBinding('style.background-color') private background = '#f5fcff'
  constructor() { }

  @HostListener('drop', ['$event'])
    onDrop(event){
      event.preventDefault();
      event.stopPropagation();
      const image = event.dataTransfer.files;
      if(image.length > 0){
        var reader = new FileReader();
        //console.log(image)
        //console.log(`You dropped ${image.length} files. with ${ image[0]["name"]}`)
        reader.readAsDataURL(image[0]);
        reader.onload = (event) => {
          //console.log('readfiles event ===== ',event);
          var image = new Image();
          var fileReader = event.target as FileReader;
          image.src = fileReader.result as string;
          this.imageDropped.emit(image.src);
          //this.imageDropped.emit(event.target.result);
        }
      }
    }

    @HostListener('dragover', ['$event'])
    onDragOver( event ){
      event.preventDefault();
      event.stopPropagation();
      //console.log('Drag over')
      this.background = 'white';
      this.imageHovered.emit(true);
    }

    @HostListener('dragleave', ['$event'])
    onDragLeave(event ){
      event.preventDefault();
      event.stopPropagation();
      this.background = '#f5fcff'
      this.imageHovered.emit(false);
      //console.log('Drop Zone Out')
    }

}
