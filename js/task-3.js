function getElementdWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    return contentWidth + paddingWidth * 2 + borderWidth * 2;
}
console.log(getElementdWidth("50px", "8px", "4px"));
console.log(getElementdWidth("60px", "12px", "8.5px"));
console.log(getElementdWidth("200px", "0px", "0px"));
