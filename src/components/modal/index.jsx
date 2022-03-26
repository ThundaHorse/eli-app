import React, { useState } from "react";
import { Select } from "react-materialize";
import TimePicker from "react-bootstrap-time-picker";
import { Form, Modal, Button, Row, Col } from "react-bootstrap";

export const BookNowModal = (props) => {
  const [state, setState] = useState({
    summary: [],
    description: "",
    start: {
      dateTime: "08:00",
      timeZone: "",
    },
    end: {
      dateTime: null,
      timeZone: "",
    },
    recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
    attendees: [{ email: process.env.REACT_APP_DEFAULT_EMAIL }, { email: "" }],
    reminders: {
      // useDefault: false,
      // overrides: [
      //   { method: "email", minutes: 24 * 60 },
      //   { method: "popup", minutes: 10 },
      // ],
    },
    errors: "",
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (state.summary.length > 0) {
      setValidated(true);
    } else {
      setValidated(false);
      setState({
        ...state,
        errors: "Please select a service",
      });
    }

    console.log(state);
  };

  const handleSelectChange = (e) => {
    let options = e.target.options;
    let value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setState({
      ...state,
      description: `Appointment for ${value.length} services`,
      summary: value,
      errors: "",
    });
  };

  const handleTimeStartChange = (e) => {
    setState({
      ...state,
      start: {
        dateTime: e,
      },
      end: {
        dateTime: e + state.summary.length * 3600,
      },
    });
  };

  return (
    <>
      <Modal
        id='add-event-modal'
        className='mt-4'
        size='lg'
        show={props.showModal}
      >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header>
            <Modal.Title id='book-now-modal'>Book Now!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group className='mb-3'>
              <Form.Label>Selected Date</Form.Label>
              <Form.Control
                disabled
                className='p-2'
                placeholder={props.dayInfo.dateStr}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Services</Form.Label>
              <Select
                required
                id='services-select'
                multiple
                options={{
                  classes: "",
                  dropdownOptions: {
                    className: "text-black",
                    alignment: "left",
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    outDuration: 250,
                  },
                }}
                value={state.summary}
                onChange={handleSelectChange}
              >
                <option disabled value=''>
                  Select services
                </option>
                <option value={1}>Help me Package</option>
                <option value={2}>Mock Interview</option>
                <option value={3}>Resume Package</option>
                <option value={4}>Find me a Job!</option>
                <option value={5}>Portfolio Revamp</option>
              </Select>
              <p className='mb-3' style={{ color: "#c90048" }}>
                {state.errors}
              </p>
            </Form.Group>

            <br />

            <Form.Group className='mb-3'>
              <Form.Label>Start Time</Form.Label>
              <TimePicker
                required
                id='start-time'
                start='08:00'
                end='21:00'
                step={30}
                value={state.start.dateTime}
                onChange={handleTimeStartChange}
              />
            </Form.Group>

            <br />

            {state.start.dateTime ? (
              <Form.Group className='mb-3'>
                <Form.Label>End Time</Form.Label>
                <TimePicker
                  disabled
                  required
                  id='end-time'
                  start='09:00'
                  end='21:00'
                  step={30}
                  value={state.end.dateTime}
                />
              </Form.Group>
            ) : (
              <p>Please select a start time</p>
            )}
          </Modal.Body>

          <Modal.Footer style={{ backgroundColor: "white" }}>
            <Row className='mx-2'>
              <Col>
                <Button className='red' onClick={props.modalHandler}>
                  Close
                </Button>
              </Col>
              <Col>
                <Button type='submit'>Submit</Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
