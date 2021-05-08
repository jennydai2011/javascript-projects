class Snake{
    head: HTMLElement;

    bodies: HTMLCollection;

    element: HTMLElement;

    constructor(){
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
        this.element = document.getElementById('snake')!;
    }

    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    set X(value: number){
        if(this.X === value){
            return;
        }

        if( value < 0 || value > 290){
            throw new Error("zhuang qiang le");
        }

        //head x,y can't == 2nd div of body
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            //can't return head
            if(value > this.X){
                //如果新值大于旧值， 说明向右走
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        }
        
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
        
    }

    set Y(value: number){
        if(this.Y === value){
            return;
        }

        if( value < 0 || value > 290){
            throw new Error("zhuang qiang le");
        }

       //head x,y can't == 2nd div of body
       if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop=== value){
            //can't return head
            if(value > this.Y){
                //如果新值大于旧值， 说明向右走
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        }
        
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    addBody(){
        this.element.insertAdjacentHTML("beforeend", '<div></div>');
    }

    moveBody(){
        for(let i=this.bodies.length-1; i>0; i--){
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBody(){
        for(let i=1; i<this.bodies.length; i++){
            
            let bd = (this.bodies[i] as HTMLElement);
            if(this.X ===bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error("body zhuang dao head le")；
            }
        }
    }
}

export default Snake;