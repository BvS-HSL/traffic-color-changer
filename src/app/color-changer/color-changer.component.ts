import {Component, OnInit, Renderer2} from '@angular/core';
import {TrafficLightColor} from "./traffic-light-color.enum";

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.scss']
})
export class ColorChangerComponent implements OnInit{

  public currentColor : TrafficLightColor = TrafficLightColor.GREEN;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color',this.currentColor);
    }

  changeBackgroundColor() {
    const randomColor = this.getRandomColor();
    this.renderer.setStyle(document.body, 'background-color', randomColor);
  }

  changeBackgroundColor2() {
    let colorIndex: number = this.getEnumIndexByName(TrafficLightColor,this.currentColor);
    console.log("colorIndex = " + colorIndex)
    // colorIndex = this.getEnumIndexByName2(TrafficLightColor,this.currentColor);
    // console.log("colorIndex = " + colorIndex)


    colorIndex = this.getEnumIndexByValue(TrafficLightColor,  this.currentColor);
    console.log("colorIndex = " + colorIndex)

    console.log(Object.keys(TrafficLightColor)[this.currentColor]);

    //colorIndex=colorIndex+1;
    //this.currentColor = this.getEnumValueByIndex(TrafficLightColor, colorIndex);
    this.currentColor = this.nextValueByIndex(TrafficLightColor, colorIndex);
    // console.log(TrafficLightColor);
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
    index++;
    if (index === Object.values(enumType).length ) index = 0;
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
    console.log("getEnumIndexByValue.enumValue= " + enumValue);
    const keys = Object.keys(enumType);
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





  //Object.keys(TrafficLightColor)[this.currentColor]

  getEnumIndexByName(enumType: any, enumName: string): number | undefined {
    const keys = Object.keys(enumType).filter(key => isNaN(Number(enumType[key])));
    console.log(keys);
    console.log(keys[2])
    console.log(enumName);
    console.log(keys.indexOf(enumName))
    return keys.indexOf(enumName);
  }



  getEnumIndexByName2(enumType: any, enumName: string): number | undefined {
    const keys = Object.keys(enumType);
    console.log(keys);
    console.log(keys[2])
    console.log(enumName);
    console.log(keys.indexOf(enumName))
    keys.forEach((key, index) => {
      console.log(`${key} has index ${index}`)
    });
    keys.forEach((key, index) => {
      console.log(key)
      console.log(index)

      if (key === enumName) return index;
    })
    return -1;
  }




  getEnumValueByIndexX(enumType: any, index: number): any {
    const keys = Object.keys(enumType).filter(key => isNaN(Number(enumType[key])));
    return enumType[keys[index]];
  }




}



