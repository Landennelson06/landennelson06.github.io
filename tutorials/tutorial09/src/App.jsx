import React from "react";
import Card from "./components/Card.jsx";
import { Image,QRCode, Switch } from 'antd';
import AntCard from "./components/AntCard.jsx";

export default function App() {
    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                <Card
                    name="Sample item"
                    image_url="https://picsum.photos/id/237/400/300"
                    description="A short description goes here."
                />
                <Card
                    name="Sample item2"
                    image_url="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"
                    description="kitty"
                />
                <br></br>
                <AntCard
                name="Sample item"
                    image_url="https://picsum.photos/id/237/400/300"
                    description="A short description goes here."
                    />
                <br></br>
                <QRCode value={"google.com"} />
                <Switch defaultChecked />
                <br></br>
                <Image
                    width={200}
                    alt="basic"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </main>
        </>
    );
}