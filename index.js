const superbowlWin = record => record.find(element=>element.result === 'W') ? record.find(element=>element.result === 'W').year : undefined ;
