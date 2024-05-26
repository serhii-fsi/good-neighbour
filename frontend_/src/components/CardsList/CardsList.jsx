import CardsListView from "./CardsListView";

/**
 * @param {object} props
 * @param {array} props.childrenDates [string,] (optional)
 * @param {array} props.children
 */
export default function CardsList(props) {
    const listWithDividers = !props.childrenDates
        ? props.children
        : props.children.reduce((list, child, index) => {
              const childDate = props.childrenDates?.[index];
              const prevChildDate = props.childrenDates?.[index - 1];
              if (childDate !== prevChildDate) list.push({ isDivider: true, date: childDate });
              list.push(child);
              return list;
          }, []);

    return <CardsListView listWithDividers={listWithDividers} />;
}
