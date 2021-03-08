import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex: 1;
    cursor: pointer;

    .react-datepicker-wrapper {
        flex: 1;
    }

    .react-datepicker__day--outside-month {
        color: ${(props) => props.theme.colors.white.outDate};
    }

    .react-datepicker__header {
        background: ${(props) => props.theme.colors.white.base};
        border: none;
    }

    .react-datepicker__day {
        padding: 7px;
        border-radius: 0;
        border: none;
        outline: none;
        :focus {
            border: none;
            background: ${(props) => props.theme.colors.blue.date};
            color: ${(props) => props.theme.colors.white.base};
        }
    }
    .react-datepicker__day-names {
        background: ${(props) => props.theme.colors.blue.weekday};
    }

    .react-datepicker__day-name {
        padding: 7px;
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        .react-datepicker__day {
            padding: 2px;
        }
        .react-datepicker__day-name {
            padding: 2px;
        }
        .react-datepicker {
            width: 100%;
        }
        .react-datepicker-popper {
            left: -23px !important;
        }
    }
`;

export const SelectorDiv = styled.div`
    display: flex;
    border: 1px solid ${(props) => props.theme.colors.black.border};
    padding: 7px;
`;

export const Value = styled.div`
    padding-right: 20px;
    flex: 1;
    color: ${(props) => props.theme.colors.black.dark};
    font-size: 14px;
    display: flex;
    align-items: center;
`;

export const Text = styled.div`
    color: ${(props) => props.theme.colors.black.base};
    opacity: 0.5;
`;

export const Header = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
`;

export const LeftDiv = styled.div`
    background: ${(props) => props.theme.colors.white.base};
    color: ${(props) => props.theme.colors.black.light};
    left: 22px;
    padding: 3px;
    position: absolute;
    top: 20px;
    outline: none;
    cursor: pointer;
`;

export const RightDiv = styled.div`
    background: ${(props) => props.theme.colors.white.base};
    color: ${(props) => props.theme.colors.black.light};
    right: 22px;
    padding: 3px;
    position: absolute;
    top: 20px;
    outline: none;
    cursor: pointer;
`;

export const MonthName = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

export const IconsDiv = styled.div`
    display: flex;
`;

export const Boundary = styled.div`
    margin: 0 10px 0 15px;
    border-left: 1px solid ${(props) => props.theme.colors.black.border};
`;
