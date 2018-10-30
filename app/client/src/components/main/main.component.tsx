import * as React from 'react';

import { CardList } from '../card-list';
import { CardInfo } from '../typedef';
import { mainClass, headerClass } from './main.style';

type MainProps = Readonly<{

}>;

type MainState = Readonly<{
  content: CardInfo[];
}>;

const initialState = {
  content: [
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio laborum doloribus, porro adipisci quo, asperiores voluptatem vero ducimus labore facere, tenetur explicabo beatae sed dicta vitae perspiciatis id accusamus!'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio laborum doloribus, porro adipisci quo, asperiores voluptatem vero ducimus labore facere, tenetur explicabo beatae sed dicta vitae perspiciatis id accusamus!'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio laborum doloribus, porro adipisci quo, asperiores voluptatem vero ducimus labore facere, tenetur explicabo beatae sed dicta vitae perspiciatis id accusamus!'
    },
  ]
};

export class Main extends React.Component<MainProps, MainState> {
  state: MainState = initialState;
  render() {
    const { content } = this.state;

    return (
      <main className={mainClass}>
        <header className={headerClass}>
          <h1>Play Ground</h1>
        </header>
        <CardList content={content} />
      </main>
    );
  }
}