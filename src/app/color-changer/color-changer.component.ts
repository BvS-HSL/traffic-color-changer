import {Component, OnInit, Renderer2} from '@angular/core';
import {TrafficLightColor} from "./traffic-light-color.enum";

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.scss']
})
export class ColorChangerComponent implements OnInit{

  public currentColor : TrafficLightColor = TrafficLightColor.GREEN;
  public isButtonVisible : boolean = true;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color',this.currentColor);
    this.renderer.listen('window', 'click',(e:MouseEvent)=>{
      this.changeBackgroundColor();
      this.isButtonVisible= false;
    });
  }

  changeBackgroundColor() {
    let colorIndex = this.getEnumIndexByValue(TrafficLightColor,  this.currentColor);
    console.log("colorIndex = " + colorIndex)
    console.log(Object.keys(TrafficLightColor)[this.currentColor]);

    this.currentColor = this.nextValueByIndex(TrafficLightColor, colorIndex);
    this.renderer.setStyle(document.body, 'background-color', this.currentColor);

    const keys = Object.keys(TrafficLightColor)

    keys.forEach((key, index) => {
      console.log(`${key} has index ${index}`)
    })
  }

  getEnumValueByIndex(enumType: any, index: number): any {
    return Object.values(enumType)[index];
  }

  nextValueByIndex(enumType: any, index: number): any {
    //index++;
    index = (index === Object.values(enumType).length -1) ? 0: ++index;
    console.log(index);
    //if (index === Object.values(enumType).length ) index = 0;
    return Object.values(enumType)[index];
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getEnumIndexByValue(enumType: any, enumValue: number | string): number | undefined {
    const values = Object.values(enumType);
    for (let i = 0; i < values.length -1 ; i++) {
      console.log("values[" + i + "] = " + values[i]);
      if (values[i] === enumValue) {
        console.log("Found!");
        return i;
      }
    }
    return -1;
  }

  getEnumIndexByName(enumType: any, enumName: string): number | undefined {
    const keys = Object.keys(enumType).filter(key => isNaN(Number(enumType[key])));
    return keys.indexOf(enumName);
  }

}



