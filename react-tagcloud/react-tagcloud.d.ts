// Type definitions for react-tagcloud v0.4.0
// Project: https://github.com/madox2/react-tagcloud
// Definitions by: wassname <wassname@wassname.org>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ReactTagCloud {
    interface TagCloudProps extends __React.Props<void> {
        tags: any[]
        maxSize: number,
        minSize: number,
        shuffle?: boolean,
        renderer?: Function,
        className?: string
        onClick?: Function
    }
    interface TagCloudClass extends __React.ComponentClass<TagCloudProps> {}

    interface DefaultRendererFactoryOptions {
        tagRenderer?: Function
        colorOptions?: any
        props?: any
    }
    interface RendererFunction {
         (tag:any, size:number, key:string|number, handlers:any):any
    }
    interface DefaultRendererFactory {
        new(_ref?: DefaultRendererFactoryOptions): RendererFunction;
        (_ref?: DefaultRendererFactoryOptions): RendererFunction
    }
}


// export = TagCloud
declare module reactTagCloud {
    var TagCloud: ReactTagCloud.TagCloudClass;
    var DefaultRenderer: ReactTagCloud.DefaultRendererFactory;
}

declare module "react-tagcloud" {
    export = reactTagCloud
}
