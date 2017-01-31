var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//var TodoSearch = require('TodoSearch');
import { TodoSearch } from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch set searchText on input change', () => {
    var searchText = 'dog';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: searchText,
    };

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch toggleShowCompleted when checkbox is checked', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
