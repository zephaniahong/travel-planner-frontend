// KIV for Stretch (This will be used for calendar instead of food/activties/trips)
import React, { useCallback, useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

function Copyable(props) {
  return (
    <Droppable droppableId={props.droppableId} isDropDisabled={true}>
      {(provided, snapshot) => (
        <ul ref={provided.innerRef} className={props.className}>
          {props.items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <React.Fragment>
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={provided.draggableProps.style}
                    className={snapshot.isDragging ? "dragging" : ""}
                  >
                    {item.label}
                  </li>
                  {snapshot.isDragging && (
                    <li className="react-beatiful-dnd-copy">{item.label}</li>
                  )}
                </React.Fragment>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

function SideBarItems(props) {
  return <Copyable droppableId="SHOP" className="shop" items={props.items} />;
}

export default function KanbanBoard() {
  return <Droppable></Droppable>;
}
