import {Card, Image} from 'antd';

export default function AntCard({ name, image_url, description }){
    return (
        <Card title={name} style={{ width: "35vw" }}>
            <Image
                    width={200}
                    alt={name}
                    src={image_url}
                />
            <p>{description}</p>
        </Card>
    )
}