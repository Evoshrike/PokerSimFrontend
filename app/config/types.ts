type RootStackParamList = {
    Home: undefined;
    NewGame: undefined
    JoinGame: undefined
    InGame: undefined
    Lobby: { code: number; }
  };

  type Player = {
    c1: Card;
    c2: Card;
    bet: number;
    remainingMoney: number;
    isALlIn: boolean;
    folded: boolean;
    name: string;
  }

  type Choice = {
    action: String;
    raise: number
  }

  type Card = {
    suit: String;
    number: String;
  }

  export {Player, Choice, Card, RootStackParamList}

  export default {}