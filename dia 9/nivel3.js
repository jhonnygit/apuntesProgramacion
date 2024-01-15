//4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
function Statistics(muestra){
    this.muestra=muestra;

    //media
    this.mean=function(){
        const sum=this.muestra.reduce((acc,cur)=>acc+cur,0);
        return (sum/this.muestra.length).toFixed();
    };
    //mediana
    this.median=function(){
        const sortedMuestra = [...this.muestra].sort((a,b) => a - b );
        const middle = parseInt(sortedMuestra.length / 2);
        if(sortedMuestra.length%2===0){
            return (sortedMuestra[middle-1]+sortedMuestra[middle])/2;
        }else{
            return sortedMuestra[middle];
        }
    };
    //moda
    this.mode=function(){
        const frecuencyMap=[];
        for(const value of this.muestra){
            frecuencyMap[value]=(frecuencyMap[value]||0)+1;
        }
        let maxFrequency=0;
        let modes=[];
        for(const value of frecuencyMap){
            if(frecuencyMap[value]>maxFrequency){
                maxFrequency=frecuencyMap[value];
                modes=[value]
            }else if(frecuencyMap[value]===maxFrequency){
                modes.push(value);
            }
        }
        return modes;
    };
    //calculo rango
    this.range=function(){
        const min=Math.min(...this.muestra);
        return Math.max(...this.muestra)-min;
    }
    //calculo varianza
    this.variance=function(){
        const mean=this.mean();
        const sumOfSquares=this.muestra.reduce((acc,value)=>{
            return acc+Math.pow(value-mean,2);
        },0);
        return sumOfSquares/this.muestra.length;
    };

    //desviacion standar
    this.standarDeviation=function(){
        return Math.sqrt(this.variance());
    };

    //minimo
    this.min=function(){
        return Math.min(...this.muestra);
    }; 
    //maxi
    this.max=function(){
        return Math.max(...this.muestra);
    };
    //contar elementos
    this.count = function() {
        return this.muestra.length;
    };  
}
const statistics=new Statistics(ages);


console.log('Count:', statistics.count()) 
//console.log('Sum: ', statistics.sum()) 
console.log('Min: ', statistics.min()) 
console.log('Max: ', statistics.max()) 
console.log('Range: ', statistics.range()) 
console.log('Mean: ', statistics.mean()) 
console.log('Median: ',statistics.median()) 
console.log('Mode: ', statistics.mode()) 
console.log('Variance: ',statistics.variance()) 
console.log('Standard Deviation: ', statistics.standarDeviation())
//console.log('Variance: ',statistics.var()) 
//console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]