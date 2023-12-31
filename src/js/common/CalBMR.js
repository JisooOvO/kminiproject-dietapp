export default function CalBMR(height,weight,gender,age,activityFactor){
    let factor = 1.2;
    let result = 0;
    switch(+activityFactor){
        case 1 : factor = 1.2; break;
        case 2 : factor = 1.375; break;
        case 3 : factor = 1.55 ; break;
        case 4 : factor = 1.725; break;
        case 5 : factor = 1.9; break;
        default : factor = 1.2;
    }
    if(+gender === 1) result = (66.5 + (13.75 * weight) + (5.003 * height) - (6.75 - age)) * factor;
    else if(+gender === 2) result = (655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)) * factor;
    return result;
}