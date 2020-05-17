var direction=console.log("enter the direction");
var steps=console.log("enter the no of steps");
var r=[8,7,6,5,4,3,2,1];
var c=['A','B'.'C','D','E','F','G','H'];
let queen={
  pos{
  r:2,
  c:4
},
    direction='S'
};
// Checkpoint 2 | Turning the queen
switch(direction)
  case='N':
  console.log('S');
  break;
 case='S':
  console.log('N');
  break;
 case='E':
  console.log('W');
  break;
 case='W':
  console.log('E');
  break;
 case='NE':
  console.log('SW');
  break;
 case='SW':
  console.log('NE');
  break;
      case='SE':
  console.log('NW');
  break;
      case='NW':
  console.log('SE');
  break;
      
      if(queen.pos.r<8 && queen.pos.c<8){
        console.log("safe queen");
      }
      else{
        break;
      }
      
      switch(direction)
        {
            case'N':queen.pos.r-=steps
            if("safe queen")
              case'S':queen.pos.r+=steps
            if("safe queen")
              case'E':queen.pos.c+=steps
            if("safe queen")
              case'W':queen.pos.c-=steps
            if("safe queen")
   case'NE':queen.pos.r-=steps,queen.pos.c+=steps
            if("safe queen")
    case'NW':queen.pos.r-=steps,queen.pos.c-=steps
            if("safe queen")
              case'SE':queen.pos.r+=steps,queen.pos.c+=steps
            if("safe queen")
               case'SW':queen.pos.r+=steps,queen.pos.c-=steps
            if("safe queen")
   }
   var whereabouts=consle.log(queen.pos.c + queen.pos.r);
      
      
      
      