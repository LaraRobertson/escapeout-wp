import { TextControl, Flex, FlexBlock, FlexItem, Button, RadioControl} from "@wordpress/components";
import {editArrayItem, deleteArrayItem} from "./manageArrayItem";
import {caesarCipher} from "./ceaserCipher";
export default function PuzzleEdit({puzzleArray,index,attributes,setAttributes,playZoneName}) {
    if (typeof puzzleArray != "undefined") {
        return(
            <>
                {puzzleArray?.map(function (puzzle, index2) {
                    return (
                        <div key={index2} className={"puzzleDiv"}>
                            <div className={puzzle.disabled == "Yes" ? "disabled" : ""}></div>
                            <div className="item-title-edit">Puzzles {index2 + 1} (zone name: {playZoneName}):</div>
                            <Flex className={"puzzle-flex"}>
                                <FlexBlock>
                                    <TextControl
                                        label="Puzzle Name"
                                        autoFocus={puzzle.name == undefined}
                                        value={puzzle.name}
                                        onChange={newValue => {
                                            editArrayItem("puzzle","name", newValue, index, index2, "", attributes, setAttributes)
                                        }}
                                    />
                                    <TextControl
                                        label="Puzzle Description"
                                        autoFocus={puzzle.description == undefined}
                                        value={puzzle.description}
                                        onChange={newValue => {
                                            editArrayItem("puzzle","description", newValue, index, index2, "", attributes, setAttributes)
                                        }}
                                    />
                                    <TextControl
                                        label="Puzzle Question"
                                        autoFocus={puzzle.question == undefined}
                                        value={puzzle.question}
                                        onChange={newValue => {
                                            editArrayItem("puzzle","question", newValue, index, index2, "", attributes, setAttributes)
                                        }}
                                    />
                                </FlexBlock>
                                <FlexBlock>
                                    {puzzle.answer.map(function (answerItem, index3) {
                                        return (
                                            <TextControl
                                                label={"answer " + (index3 + 1)}
                                                autoFocus={answerItem == undefined}
                                                value={answerItem}
                                                onChange={newValue => {
                                                    editArrayItem("puzzle","answer", newValue, index, index2, index3, attributes, setAttributes)
                                                }}
                                            />
                                        )
                                    })}
                                    {puzzle.sols.map(function (answerItem2, index4) {
                                        return (
                                           <div className={"small"}>encrypted answer {index4}: {answerItem2}</div>
                                        )
                                    })}
                                    <Button
                                        isPrimary
                                        onClick={() => {
                                            editArrayItem("puzzle","addAnswer", "", index, index2, "", attributes, setAttributes)
                                        }}
                                    >
                                        Add Another Answer
                                    </Button>


                                </FlexBlock>
                                <Flex direction={"column"}>
                                    <FlexItem>
                                        <RadioControl
                                            selected={puzzle.disabled}
                                            options={[
                                                {label: 'Live', value: 'No'},
                                                {label: 'Disabled', value: 'Yes'},
                                            ]}
                                            onChange={newValue => {
                                                editArrayItem("puzzle","disabled", newValue, index, index2, "", attributes, setAttributes)
                                            }}
                                        />
                                    </FlexItem>
                                    <FlexItem>
                                        <TextControl
                                            label="Order"
                                            style={{width: "50px"}}
                                            type={"number"}
                                            autoFocus={puzzle.order == undefined}
                                            value={puzzle.order}
                                            onChange={newValue => {
                                                editArrayItem("puzzle","order", newValue, index, index2, "", attributes, setAttributes)
                                            }}
                                        />
                                    </FlexItem>
                                    <FlexItem>
                                        <Button isLink className="attention-delete"
                                                onClick={() => deleteArrayItem("puzzle", puzzleArray,index,index2,attributes,setAttributes)}>
                                            Delete
                                        </Button>
                                    </FlexItem>
                                </Flex>
                            </Flex>
                        </div>
                    )
                })}
            </>
        )
    } else {
        return (
            <div>no puzzles</div>
        )
    }


}