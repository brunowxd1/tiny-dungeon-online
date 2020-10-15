import { Color } from '../../board/map/tiles/Color'

export const Items = {
    Empty: [[Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ],
        [Color.LightGrey ,0               ,0               ,0               ,0               ,0               ,0               ,Color.LightGrey ],
        [Color.LightGrey ,0               ,0               ,0               ,0               ,0               ,0               ,Color.LightGrey ],
        [Color.LightGrey ,0               ,0               ,0               ,0               ,0               ,0               ,Color.LightGrey ],
        [Color.LightGrey ,0               ,0               ,0               ,0               ,0               ,0               ,Color.LightGrey ],
        [Color.LightGrey ,0               ,0               ,0               ,0               ,0               ,0               ,Color.LightGrey ],
        [Color.LightGrey ,0               ,0               ,0               ,0               ,0               ,0               ,Color.LightGrey ],
        [Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ],],
    Coffee: [[0               ,0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,0               ],
        [0               ,0               ,Color.Grey  ,Color.Grey  ,Color.Grey  ,Color.Grey  ,Color.Grey  ,Color.Grey  ],
        [0               ,0               ,Color.Grey  ,Color.Grey  ,Color.Grey  ,Color.Grey  ,0               ,Color.Grey  ],
        [0               ,0               ,Color.Grey  ,Color.Grey  ,Color.Grey  ,Color.Grey  ,0               ,Color.Grey  ],
        [0               ,0               ,Color.Grey  ,Color.Grey  ,Color.Grey  ,Color.Grey  ,Color.Grey  ,Color.Grey  ],
        [0               ,0               ,Color.Grey  ,Color.Grey  ,Color.Grey  ,Color.Grey  ,0               ,0               ],],
    Coin: [[0               ,0               ,0               ,Color.Yellow    ,Color.Yellow    ,0               ,0               ,0               ],
        [0               ,0               ,Color.Yellow    ,Color.Orange    ,Color.Yellow    ,Color.Yellow    ,0               ,0               ],
        [0               ,Color.Yellow    ,Color.Orange    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,0               ],
        [0               ,Color.Yellow    ,Color.Orange    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,0               ],
        [0               ,Color.Yellow    ,Color.Orange    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,0               ],
        [0               ,Color.Yellow    ,Color.Orange    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,Color.Yellow    ,0               ],
        [0               ,0               ,Color.Yellow    ,Color.Orange    ,Color.Yellow    ,Color.Yellow    ,0               ,0               ],
        [0               ,0               ,0               ,Color.Yellow    ,Color.Yellow    ,0               ,0               ,0               ],],
    WoodenDagger: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightBrown,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightBrown,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightBrown,0               ,0               ,0               ,0               ],
        [0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightBrown,0               ,0               ,0               ,0               ],],
    WoodenSword: [[0               ,0               ,0               ,Color.LightBrown,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightBrown,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightBrown,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightBrown,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightBrown,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightBrown,0               ,0               ,0               ,0               ],
        [0               ,0               ,Color.Brown     ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.Brown     ,0               ,0               ,0               ,0               ],],
    BronzeDagger: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,0               ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,Color.Grey  ,Color.Grey  ,Color.Grey  ,Color.Grey  ,0               ,0               ],
        [0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],],
    BronzeSword: [[0               ,0               ,0               ,0               ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.Brown     ,Color.Brown     ,0               ,0               ,0               ],
        [0               ,0               ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,0               ,0               ],
        [0               ,0               ,0               ,Color.Black     ,Color.Black     ,0               ,0               ,0               ],],
    IronDagger: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,0               ,Color.LightGrey ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,0               ],
        [0               ,0               ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,0               ],],
    IronSword: [[0               ,0               ,0               ,0               ,Color.LightGrey ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,0               ],
        [0               ,0               ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,0               ,0               ],
        [0               ,0               ,0               ,Color.Black     ,Color.Black     ,0               ,0               ,0               ],],
    BluriteDagger: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,0               ,Color.DarkPurple,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,0               ],
        [0               ,0               ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,0               ],],
    BluriteSword: [[0               ,0               ,0               ,0               ,Color.DarkPurple,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,0               ],
        [0               ,0               ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkBlue2 ,Color.DarkBlue2 ,0               ,0               ,0               ],],
    AdamantDagger: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,0               ,Color.GreenBlue3,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,0               ],
        [0               ,0               ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,0               ,0               ],
        [0               ,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,0               ],],
    AdamantSword: [[0               ,0               ,0               ,0               ,Color.GreenBlue3,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,0               ],
        [0               ,0               ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkGreenBlue,Color.DarkGreenBlue,0               ,0               ,0               ],],
    FireDagger: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,0               ,Color.DarkRed   ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,0               ],
        [0               ,0               ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,0               ],],
    FireSword: [[0               ,0               ,0               ,0               ,Color.DarkRed   ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,0               ],
        [0               ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,0               ],
        [0               ,0               ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,0               ,0               ],
        [0               ,0               ,0               ,Color.Wine      ,Color.Wine      ,0               ,0               ,0               ],],
    WoodenHelm: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,0               ],
        [0               ,Color.LightBrown,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.Brown     ,Color.LightBrown,0               ],
        [0               ,Color.Brown     ,0               ,0               ,0               ,0               ,Color.Brown     ,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
    BronzeHelm: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0               ,0               ],
        [0               ,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,Color.Black     ,Color.Black     ,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0               ],],
    IronHelm: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,0               ,0               ],
        [0               ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,Color.LightGrey ,Color.Black     ,Color.Black     ,Color.Black     ,Color.Black     ,Color.LightGrey ,0               ],
        [0               ,Color.LightGrey ,Color.LightGrey ,Color.Black     ,Color.Black     ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,0               ],],
    BluriteHelm: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,0               ,0               ],
        [0               ,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,0               ],
        [0               ,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,0               ],
        [0               ,Color.DarkPurple,Color.DarkBlue2 ,Color.DarkBlue2 ,Color.DarkBlue2 ,Color.DarkBlue2 ,Color.DarkPurple,0               ],
        [0               ,Color.DarkPurple,Color.DarkPurple,Color.DarkBlue2 ,Color.DarkBlue2 ,Color.DarkPurple,Color.DarkPurple,0               ],
        [0               ,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,0               ],
        [0               ,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,0               ],],
    AdamantHelm: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ],
        [0               ,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,0               ],
        [0               ,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,0               ],
        [0               ,Color.GreenBlue3,Color.DarkGreenBlue,Color.DarkGreenBlue,Color.DarkGreenBlue,Color.DarkGreenBlue,Color.GreenBlue3,0               ],
        [0               ,Color.GreenBlue3,Color.GreenBlue3,Color.DarkGreenBlue,Color.DarkGreenBlue,Color.GreenBlue3,Color.GreenBlue3,0               ],
        [0               ,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,0               ],
        [0               ,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,0               ],],
    FireHelm: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ],
        [0               ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,0               ],
        [0               ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,0               ],
        [0               ,Color.DarkRed   ,Color.Wine      ,Color.Wine      ,Color.Wine      ,Color.Wine      ,Color.DarkRed   ,0               ],
        [0               ,Color.DarkRed   ,Color.DarkRed   ,Color.Wine      ,Color.Wine      ,Color.DarkRed   ,Color.DarkRed   ,0               ],
        [0               ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,0               ],
        [0               ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,0               ],],
    WoodenArmour: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,Color.LightBrown,Color.LightBrown,0               ,0               ,Color.LightBrown,Color.LightBrown,0               ],
        [0               ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,0               ],
        [0               ,0               ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,0               ,0               ],
        [0               ,0               ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,0               ,0               ],
        [0               ,0               ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,0               ,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
    BronzeArmour: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [Color.Brown,Color.Brown,Color.Brown,0               ,0               ,Color.Brown,Color.Brown,Color.Brown],
        [Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown],
        [0               ,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
    IronArmour: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ],
        [Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ],
        [0               ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
    BluriteArmour: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,0               ,0               ,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple],
        [Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple],
        [Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple],
        [0               ,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,0               ],
        [0               ,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,0               ],
        [0               ,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
    AdamantArmour: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3],
        [Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3],
        [Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3],
        [0               ,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,0               ],
        [0               ,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,0               ],
        [0               ,Color.DarkGreenBlue,Color.DarkGreenBlue,Color.DarkGreenBlue,Color.DarkGreenBlue,Color.DarkGreenBlue,Color.DarkGreenBlue,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
    FireArmour: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ],
        [Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ],
        [Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ],
        [0               ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,0               ],
        [0               ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,0               ],
        [0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
    WoodenLegs: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,0               ,0               ],
        [0               ,0               ,Color.LightBrown,Color.LightBrown,Color.LightBrown,Color.LightBrown,0               ,0               ],
        [0               ,0               ,Color.LightBrown,0               ,0               ,Color.LightBrown,0               ,0               ],
        [0               ,0               ,Color.LightBrown,0               ,0               ,Color.LightBrown,0               ,0               ],
        [0               ,0               ,Color.LightBrown,0               ,0               ,Color.LightBrown,0               ,0               ],
        [0               ,0               ,Color.LightBrown,0               ,0               ,Color.LightBrown,0               ,0               ],
        [0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],],
    BronzeLegs: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,0               ,0               ,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,0               ,0               ,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,0               ,0               ,Color.Brown,Color.Brown,0               ],
        [0               ,Color.Brown,Color.Brown,0               ,0               ,Color.Brown,Color.Brown,0               ],],
    IronLegs: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,Color.Grey      ,0               ],
        [0               ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,Color.LightGrey ,Color.LightGrey ,0               ,0               ,Color.LightGrey ,Color.LightGrey ,0               ],
        [0               ,Color.Grey      ,Color.Grey      ,0               ,0               ,Color.Grey      ,Color.Grey      ,0               ],],
    BluriteLegs: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,Color.DarkBlue2 ,Color.DarkBlue2 ,Color.DarkBlue2 ,Color.DarkBlue2 ,0               ,0               ],
        [0               ,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,0               ],
        [0               ,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,Color.DarkPurple,0               ],
        [0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ],
        [0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ],
        [0               ,Color.DarkPurple,Color.DarkPurple,0               ,0               ,Color.DarkPurple,Color.DarkPurple,0               ],
        [0               ,Color.DarkBlue2 ,Color.DarkBlue2 ,0               ,0               ,Color.DarkBlue2 ,Color.DarkBlue2 ,0               ],],
    AdamantLegs: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,Color.DarkGreenBlue,Color.DarkGreenBlue,Color.DarkGreenBlue,Color.DarkGreenBlue,0               ,0               ],
        [0               ,Color.DarkGreenBlue,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.DarkGreenBlue,0               ],
        [0               ,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,Color.GreenBlue3,0               ],
        [0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ],
        [0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ],
        [0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ],
        [0               ,Color.GreenBlue3,Color.GreenBlue3,0               ,0               ,Color.GreenBlue3,Color.GreenBlue3,0               ],],
    FireLegs: [[0               ,0               ,0               ,0               ,0               ,0               ,0               ,0               ],
        [0               ,0               ,Color.Wine      ,Color.Wine      ,Color.Wine      ,Color.Wine      ,0               ,0               ],
        [0               ,Color.Wine      ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.Wine      ,0               ],
        [0               ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,Color.DarkRed   ,0               ],
        [0               ,Color.DarkRed   ,Color.DarkRed   ,Color.Wine      ,Color.Wine      ,Color.DarkRed   ,Color.DarkRed   ,0               ],
        [0               ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,0               ],
        [0               ,Color.DarkRed   ,Color.DarkRed   ,0               ,0               ,Color.DarkRed   ,Color.DarkRed   ,0               ],
        [0               ,Color.Wine      ,Color.Wine      ,0               ,0               ,Color.Wine      ,Color.Wine      ,0               ],],
}
