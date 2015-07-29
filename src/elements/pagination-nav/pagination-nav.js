import {customElement, bindable, computedFrom} from 'aurelia-framework';

@customElement('pagination-nav')
export class PaginationNav {
  
    @bindable List = [];
    
    @bindable Pager = {
        'PageNumber' : 1,
        'PageSize': 25,
        'TotalRecords': 0
    };

    @bindable ShowFirstLast = false;
    @bindable ShowPreviousNext = true;
    @bindable Callback = null;

    @computedFrom('List','Pager')
    get isFirstPage() {
        return this.Pager.PageNumber == 1;
    }

    @computedFrom('List','Pager')
    get isLastPage() {
        return this.Pager.PageNumber >= this.pageCount;
    }

    @computedFrom('List','Pager', 'Page.TotalRecords')
    get pageCount() {
        var n = Math.ceil(this.Pager.TotalRecords / this.Pager.PageSize);
        var array = [];
        for (var i = 0; i < n; i++) {
            array.push(i + 1);
        }
        return array
    }

    @computedFrom('List','Pager')
    get hasPreviousPage() {
        return this.Pager.PageNumber > 1;
    }

    @computedFrom('List','Pager')
    get hasNextPage() {
        return this.Pager.PageNumber < this.pageCount();
    }

    setNext() {
        if (!this.isLastPage) {
            this.setPageNumber(this.Pager.PageNumber + 1)
        }
    }

    setPrevious() {
        if (!this.isFirstPage) {
            this.setPageNumber(this.Pager.PageNumber - 1)
        }
    }

    setPageNumber(i) {
        this.Pager.PageNumber = i;
        if (this.Callback != null) {
            this.Callback();
        }        
    }

    bind(bindingContext) {
        this.$parent = bindingContext;
    }
}