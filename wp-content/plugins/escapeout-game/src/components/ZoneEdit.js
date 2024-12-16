import { MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import { TextControl, FlexBlock, Flex, RadioControl, FlexItem, Button} from "@wordpress/components";
import {__} from "@wordpress/i18n";
import AttachmentImage from "./AttachmentImage";


export default function ZoneEdit({playZone,index,editZoneMedia, editZone,deletePlayZone}) {
    const ALLOWED_MEDIA_TYPES = [ 'image' ];
    return (
        <>
            <div className={playZone.disabled == "Yes" ? "disabled" : ""}></div>
            <div className="item-title-edit">Zones {index + 1}:</div>
            <Flex>
                <FlexBlock>
                    <TextControl
                        label="Zone Name"
                        autoFocus={playZone.name == undefined}
                        value={playZone.name}
                        onChange={newValue => {
                            editZone("name", newValue, index)
                        }}
                    />
                    <TextControl
                        label="Zone Description"
                        autoFocus={playZone.description == undefined}
                        value={playZone.description}
                        onChange={newValue => {
                            editZone("description", newValue, index)
                        }}
                    />
                    <TextControl
                        label="Latitude"
                        autoFocus={playZone.lat == undefined}
                        value={playZone.lat}
                        onChange={newValue => {
                            editZone("lat", newValue, index)
                        }}
                    />
                    <TextControl
                        label="Longitude"
                        autoFocus={playZone.long == undefined}
                        value={playZone.long}
                        onChange={newValue => {
                            editZone("long", newValue, index)
                        }}
                    />
                </FlexBlock>
                <FlexBlock className={"image-holder"}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ media => {
                                editZoneMedia(media, index)
                            }}
                            title={ __( 'Zone Image', 'game-block' ) }
                            allowedTypes={ ALLOWED_MEDIA_TYPES }
                            multiple={ false }
                            value={ playZone.imageID }
                            render={ ( { open } ) => (
                                <>
                                    <Button className="button" onClick={ open }>Open Media Library</Button>
                                    <AttachmentImage imageId={playZone.imageID} />
                                    {
                                       /* playZone.imageURL && (
                                            <img
                                                src={ playZone.imageURL }
                                                alt={ __( 'Zone Image', 'game-block' ) }
                                                style={{
                                                    display: 'block',
                                                    maxWidth: '150px',
                                                    height: 'auto',
                                                }}
                                            />
                                        )*/
                                    }
                                </>

                            ) }
                        />
                    </MediaUploadCheck>
                </FlexBlock>
                <Flex direction={"column"}>
                    <FlexItem>
                        <RadioControl
                            selected={playZone.disabled}
                            options={[
                                {label: 'Live', value: 'No'},
                                {label: 'Disabled', value: 'Yes'},
                            ]}
                            onChange={newValue => {
                                editZone("disabled", newValue, index)
                            }}
                        />
                    </FlexItem>
                    <FlexItem>
                        <TextControl
                            label="Order"
                            style={{width: "50px"}}
                            type={"number"}
                            autoFocus={playZone.order == undefined}
                            value={playZone.order}
                            onChange={newValue => {
                                editZone("order", newValue, index)
                            }}
                        />
                    </FlexItem>
                    <FlexItem>
                        <Button isLink className="attention-delete"
                                onClick={() => deletePlayZone(index)}>
                            Delete
                        </Button>
                    </FlexItem>
                </Flex>
            </Flex>
        </>
    )
}