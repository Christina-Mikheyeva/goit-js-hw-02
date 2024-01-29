function getElementWidth(content, padding, border) {

    const floatContent = Number.parseFloat(content);
    const floatPadding = Number.parseFloat(padding);
    const floatBorder = Number.parseFloat(border);
    const width = (floatContent + floatPadding+ floatPadding + floatBorder + floatBorder);
    return width;
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 


