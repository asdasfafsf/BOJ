switch (require('fs')
    .readFileSync(0, 'utf-8')
    .trim()) {
    case 'SONGDO':
        console.log('HIGHSCHOOL');
        break;
    case 'CODE':
        console.log('MASTER');
        break;
    case '2023':
        console.log('0611');
        break;
    case 'ALGORITHM':
        console.log('CONTEST');
        break;
}